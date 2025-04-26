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
}: {
  focusedTodo: Todo;
  modalType: CustomModalType;
  onClose: () => void;
  onEdit: (id: string, title: string, isDone: boolean) => void;
}) => {
  // 수정된 선택
  const [isDone, setIsDone] = useState(focusedTodo.is_done);

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
        <ModalHeader className="flex flex-col gap-1">{modalType}</ModalHeader>
        <ModalBody>
          <p>상세 모달</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            닫기
          </Button>
          <Button color="primary" onPress={onClose}>
            액션
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
              onEdit(focusedTodo.id, editedTodoInput, isDone);
            }}
          >
            수정
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
        <ModalHeader className="flex flex-col gap-1">{modalType}</ModalHeader>
        <ModalBody>
          <p>삭제 모달</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            닫기
          </Button>
          <Button color="primary" onPress={onClose}>
            액션
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
