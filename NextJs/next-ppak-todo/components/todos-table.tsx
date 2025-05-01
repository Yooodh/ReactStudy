"use client";
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
  Spinner,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { CustomModalType, FocusedTodoType, Todo } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { VerticalDotsIcon } from "./icons";
import CustomModal from "./custom-modal";

export const TodosTable = ({ todos }: { todos: Todo[] }) => {
  // 할일 추가 가능 여부
  const [todoAddEnable, setTodoAddEnable] = useState(false);

  // 입력된 할일
  const [newTodoInput, setNewTodoInput] = useState("");

  // 로딩상태
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  // 띄우는 모달 상태
  const [currentModalData, setCurrentModalData] = useState<FocusedTodoType>({
    focusedTodo: null,
    modalType: "detail" as CustomModalType,
  });

  const router = useRouter();

  const addATodoHandler = async (title: string) => {
    // if (newTodoInput.length < 1) {
    if (!todoAddEnable) {
      // console.log('글자를 입력하세요.');
      return;
    }

    setTodoAddEnable(false);
    setIsLoading(true);

    await new Promise((f) => setTimeout(f, 600));

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`, {
      method: "post",
      body: JSON.stringify({
        title: title,
      }),
      cache: "no-store",
    });

    setNewTodoInput("");
    router.refresh();
    setIsLoading(false);
    notifySussessEvent("할일이 성공적으로 추가되었습니다.");
    console.log(`할일 추가 완료 : ${newTodoInput}`);
  };

  const editATodoHandler = async (
    id: string,
    editedTitle: string,
    editedIsDone: boolean
  ) => {
    // if (!todoAddEnable) {
    //   return;
    // }

    // setTodoAddEnable(false);
    setIsLoading(true);

    await new Promise((f) => setTimeout(f, 600));

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, {
      method: "post",
      body: JSON.stringify({
        title: editedTitle,
        is_done: editedIsDone,
      }),
      cache: "no-store",
    });

    // setNewTodoInput("");
    router.refresh();
    setIsLoading(false);
    notifySussessEvent("할일이 수정되었습니다.");
    console.log(`할일 수정 완료 : ${newTodoInput}`);
  };

  const deleteATodoHandler = async (
    id: string
    // editedTitle: string,
    // editedIsDone: boolean
  ) => {
    // if (!todoAddEnable) {
    //   return;
    // }

    // setTodoAddEnable(false);
    setIsLoading(true);

    await new Promise((f) => setTimeout(f, 600));

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, {
      method: "delete",
      body: JSON.stringify({
        // title: editedTitle,
        // is_done: editedIsDone,
      }),
      cache: "no-store",
    });

    // setNewTodoInput("");
    router.refresh();
    setIsLoading(false);
    notifySussessEvent("할일이 삭제되었습니다.");
    console.log(`할일 삭제 완료 : ${newTodoInput}`);
  };

  const disabledTodoAddButton = () => {
    return (
      <Popover placement="top" showArrow={true}>
        <PopoverTrigger>
          <Button color="default" className="h-14">
            추가
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">!!</div>
            <div className="text-tiny">할일을 입력해주세요!</div>
          </div>
        </PopoverContent>
      </Popover>
    );
  };

  const applyIsDoneUI = (isDone: boolean) =>
    isDone ? "line-through text-gray-900/50 dark: text-white/40" : "";

  const TodoRow = (aTodo: Todo) => {
    return (
      <TableRow key={aTodo.id}>
        <TableCell className={applyIsDoneUI(aTodo.is_done)}>
          {aTodo.id.slice(0, 4)}
        </TableCell>
        <TableCell className={applyIsDoneUI(aTodo.is_done)}>
          {aTodo.title}
        </TableCell>
        <TableCell>{aTodo.is_done ? "완료" : "미완료"}</TableCell>
        <TableCell
          className={applyIsDoneUI(aTodo.is_done)}
        >{`${aTodo.created_at}`}</TableCell>
        <TableCell>
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                onAction={(key) => {
                  console.log(`aTodo.id : ${aTodo.id} key : ${key}`);
                  setCurrentModalData({
                    focusedTodo: aTodo,
                    modalType: key as CustomModalType,
                  });
                  onOpen();
                }}
              >
                <DropdownItem key="detail">상세보기</DropdownItem>
                <DropdownItem key="edit">수정</DropdownItem>
                <DropdownItem key="delete">삭제</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </TableCell>
      </TableRow>
    );
  };

  // const notifyTodoAddedEvent = (msg: string) => toast.success(msg);
  const notifySussessEvent = (msg: string) => toast.success(msg);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const ModalComponent = () => {
    return (
      <Modal
        backdrop="blur"
        // isDismissable={false}
        // isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) =>
            currentModalData.focusedTodo && (
              <CustomModal
                focusedTodo={currentModalData.focusedTodo}
                modalType={currentModalData.modalType}
                onClose={onClose}
                onEdit={async (id, title, isDone) => {
                  console.log(id, title, isDone);
                  await editATodoHandler(id, title, isDone);
                  onClose();
                }}
                onDelete={async (id) => {
                  console.log(`onDelete / id : ${id}`);
                  await deleteATodoHandler(id);
                  onClose();
                }}
              />
            )
          }
        </ModalContent>
      </Modal>
    );
  };

  return (
    <div className="flex flex-col space-y-2">
      {ModalComponent()}
      {/* <div> */}
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* </div> */}
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          label="새로운 할일"
          type="text"
          value={newTodoInput}
          onValueChange={(changedInput) => {
            setNewTodoInput(changedInput);
            setTodoAddEnable(changedInput.length > 0);
          }}
        />

        {todoAddEnable ? (
          <Button
            color="warning"
            className="h-14"
            onPress={async () => {
              await addATodoHandler(newTodoInput);
            }}
          >
            추가
          </Button>
        ) : (
          disabledTodoAddButton()
        )}
      </div>
      <div className="h-6">
        {isLoading && <Spinner size="sm" color="warning" />}
      </div>

      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>아이디</TableColumn>
          <TableColumn>할일내용</TableColumn>
          <TableColumn>완료여부</TableColumn>
          <TableColumn>생성일</TableColumn>
          <TableColumn>액션</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"보여줄 데이터가 없습니다."}>
          {todos && todos.map((aTodo: Todo) => TodoRow(aTodo))}
        </TableBody>
      </Table>
    </div>
  );
};
