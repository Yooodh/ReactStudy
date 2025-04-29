"use client";
import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Modal,
  ModalContent,
  Checkbox,
  CircularProgress,
} from "@heroui/react";
import { CustomModalType, FocusedTodoType, Todo } from "@/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { VerticalDotsIcon } from "./icons";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { Switch } from "@heroui/switch";

const CustomModal = ({
  focusedTodo,
  modalType,
  onClose,
  onEdit,
  onDelete,
}: {
  focusedTodo: Todo;
  modalType: CustomModalType;
  onClose: () => void;
  onEdit: (id: string, title: string, isDone: boolean) => void;
  onDelete: (id: string) => void;
}) => {
  // 수정된 선택
  const [isDone, setIsDone] = useState(focusedTodo.is_done);

  // 로딩 상태
  const [isLoading, setIsLoading] = useState(focusedTodo.is_done);

  // 수정된 할일 입력
  const [editedTodoInput, setEditedTodoInput] = useState<string>(
    focusedTodo.title
  );

  // const [editedTodoInput, setEditedTodoInput] = useState<string>("");

  // useEffect(() => {
  //   setEditedTodoInput(focusedTodo.title);
  // }, []);

  const DetailModal = () => {
    return (
      <>
        <ModalHeader className="flex flex-col gap-1">할일 상세</ModalHeader>
        <ModalBody>
          <p>
            <span className="font-bold">id : {focusedTodo.id}</span>
          </p>
          <p>
            <span className="font-bold">할일 내용 : {focusedTodo.title}</span>
          </p>

          <div className="flex py-2  space-x-4">
            <span className="font-bold">완료여부 : </span>
            {`${focusedTodo.is_done ? "완료" : "미완료"}`}
          </div>

          <div className="flex py-1 space-x-4">
            <span className="font-bold">작성일 : </span>
            <p>{`${focusedTodo.created_at}`}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="default" onPress={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </>
    );
  };

  const EditModal = () => {
    return (
      <>
        <ModalHeader className="flex flex-col gap-1">할일 수정</ModalHeader>
        <ModalBody>
          <p>
            <span className="font-bold">id : </span>
            {focusedTodo.id}
          </p>
          <p>
            입력된 할일: {editedTodoInput} 완료 여부: {`isDone: ${isDone}`}
          </p>
          <Input
            autoFocus
            label="할일 내용"
            placeholder="할일을 입력해주세요"
            variant="bordered"
            isRequired
            defaultValue={focusedTodo.title}
            value={editedTodoInput}
            onValueChange={setEditedTodoInput}
          />

          <div className="flex py-2  space-x-4">
            <span className="font-bold">완료여부 : </span>
            <Switch
              defaultSelected={focusedTodo.is_done}
              color="warning"
              onValueChange={setIsDone}
              aria-label="Automatic updates"
            ></Switch>

            {`${isDone ? "완료" : "미완료"}`}
          </div>

          <div className="flex py-1 space-x-4">
            <span className="font-bold">작성일 : </span>
            <p>{`${focusedTodo.created_at}`}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="warning"
            variant="flat"
            onPress={() => {
              setIsLoading(true);
              onEdit(focusedTodo.id, editedTodoInput, isDone);
            }}
          >
            {isLoading ? (
              <CircularProgress
                color="warning"
                aria-label="Loading..."
                size="sm"
              />
            ) : (
              "수정"
            )}
          </Button>
          <Button color="default" onPress={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </>
    );
  };

  const DeleteModal = () => {
    return (
      <>
        <ModalHeader className="flex flex-col gap-1">할일 삭제</ModalHeader>
        <ModalBody>
          <p>
            <span className="font-bold">id : {focusedTodo.id}</span>
          </p>
          <p>
            <span className="font-bold">할일 내용 : {focusedTodo.title}</span>
          </p>

          <div className="flex py-2  space-x-4">
            <span className="font-bold">완료여부 : </span>
            {`${focusedTodo.is_done ? "완료" : "미완료"}`}
          </div>

          <div className="flex py-1 space-x-4">
            <span className="font-bold">작성일 : </span>
            <p>{`${focusedTodo.created_at}`}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            variant="flat"
            onPress={() => {
              setIsLoading(true);
              onDelete(focusedTodo.id);
            }}
          >
            {isLoading ? (
              <CircularProgress
                color="danger"
                aria-label="Loading..."
                size="sm"
              />
            ) : (
              "삭제"
            )}
          </Button>
          <Button color="default" onPress={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </>
    );
  };

  const getModal = (type: CustomModalType) => {
    switch (type) {
      case "detail":
        return DetailModal();
      case "delete":
        return DeleteModal();
      case "edit":
        return EditModal();
      default:
        break;
    }
  };

  return <>{getModal(modalType)}</>;
};
export default CustomModal;
