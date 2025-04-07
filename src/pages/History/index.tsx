import { useContext } from 'react';
import { HistoryContainer, HistoryList, Status } from './styles';
import { CyclesContext } from '../../context/CyclesContext';

export function History() {
  const { cycles } = useContext(CyclesContext);

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
              <tr key={`id-${cycle.startDate.toISOString()}`}>
                <td>{cycle.task}</td>
                <td>${cycle.minutesAmount} Minutos</td>
                <td>Há 2 minutos</td>
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
