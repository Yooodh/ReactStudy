'use client';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  PopoverContent,
  PopoverTrigger,
  Popover,
} from '@heroui/react';
import { Todo } from '@/types';
import { useState } from 'react';

export const TodosTable = ({ todos }: { todos: Todo[] }) => {
  // 할일 추가 가능 여부
  const [todoAddEnable, setTodoAddEnable] = useState(false);

  // 입력된 할일
  const [newTodoInput, setNewTodoInput] = useState('');

  const disabledTodoAddButton = () => {
    return (
      <Popover placement='top' showArrow={true}>
        <PopoverTrigger>
          <Button color='default' className='h-14'>
            추가
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className='px-1 py-2'>
            <div className='text-small font-bold'>!!</div>
            <div className='text-tiny'>할일을 입력해주세요!</div>
          </div>
        </PopoverContent>
      </Popover>
    );
  };

  const TodoRow = (aTodo: Todo) => {
    return (
      <TableRow key={aTodo.id}>
        <TableCell>{aTodo.id.slice(0, 4)}</TableCell>
        <TableCell>{aTodo.title}</TableCell>
        <TableCell>{aTodo.is_done ? '완료' : '미완료'}</TableCell>
        <TableCell>{`${aTodo.created_at}`}</TableCell>
      </TableRow>
    );
  };
  return (
    <>
      <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
        <Input
          label='새로운 할일'
          type='text'
          value={newTodoInput}
          onValueChange={(changedInput) => {
            setNewTodoInput(changedInput);
            setTodoAddEnable(changedInput.length > 0);
          }}
        />

        {todoAddEnable ? (
          <Button color='warning' className='h-14'>
            추가
          </Button>
        ) : (
          disabledTodoAddButton()
        )}
      </div>
      <Table aria-label='Example static collection table'>
        <TableHeader>
          <TableColumn>아이디</TableColumn>
          <TableColumn>할일내용</TableColumn>
          <TableColumn>완료여부</TableColumn>
          <TableColumn>생성일</TableColumn>
        </TableHeader>
        <TableBody emptyContent={'보여줄 데이터가 없습니다.'}>
          {todos && todos.map((aTodo: Todo) => TodoRow(aTodo))}
        </TableBody>
      </Table>
    </>
  );
};
