import { useContext } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { HistoryContainer, HistoryList, Status } from './styles';
import { CyclesContext } from '../../context/CyclesContext';

export function History() {
  const { cycles } = useContext(CyclesContext);

  function formatDate(startDate: Date) {
    const text = formatDistanceToNow(startDate, {
      addSuffix: true,
      locale: ptBR,
    });
    const result = text.charAt(0).toUpperCase() + text.substring(1, text.length);
    return result;
  }

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duraçao</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={`id-${cycle.startDate}`}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>{formatDate(cycle.startDate)}</td>
                <td>
                  {cycle.finishedDate && <Status statusColor="green">Concluído</Status>}
                  {cycle.interruptedDate && <Status statusColor="red">Interrompido</Status>}
                  {!cycle.interruptedDate && !cycle.finishedDate && (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
