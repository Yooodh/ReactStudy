import { title } from '@/components/primitives';
import { TodosTable } from '@/components/todos-table';

export default function TodosPage() {
  return (
    <div>
      <h1 className={title()}>Todos</h1>
      <TodosTable />
    </div>
  );
}
