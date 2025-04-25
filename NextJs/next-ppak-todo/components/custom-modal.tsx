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
import { useState } from "react";
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
}: {
  focusedTodo: Todo;
  modalType: CustomModalType;
  onClose: () => void;
}) => {
  const [isDone, setIsDone] = useState<Boolean>(false);

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
          <Input
            autoFocus
            label="할일 내용"
            placeholder="할일을 입력해주세요"
            variant="bordered"
            defaultValue={focusedTodo.title}
          />

          <div className="flex py-2  space-x-4">
            <span className="font-bold">완료여부 : </span>
            <Switch
              defaultSelected={focusedTodo.is_done}
              aria-label="Automatic updates"
            ></Switch>
          </div>

          <div className="flex py-1 space-x-4">
            <span className="font-bold">작성일 : </span>
            <p>{`${focusedTodo.created_at}`}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="flat" onPress={onClose}>
            수정
          </Button>
          <Button color="primary" onPress={onClose}>
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
