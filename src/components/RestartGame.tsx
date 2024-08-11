import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

interface RestartGameModalProps {
  isOpen: boolean;
  onRestart: () => void;
  onClose: () => void;
}

const RestartGameAlert = ({
  isOpen,
  onClose,
  onRestart,
}: RestartGameModalProps) => {
  const cancelRef = useRef(null);

  const restartGame = () => {
    onRestart();
    onClose();
  }

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Restart game
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You will lose all previous progress.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={restartGame} ml={3}>
              Restart game
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default RestartGameAlert;
