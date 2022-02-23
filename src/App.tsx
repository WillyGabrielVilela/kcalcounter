import { useState } from 'react';
import Modal from 'react-modal';
import { Dash } from "./components/Dash";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';


Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dash />

      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
      </TransactionsProvider>

  );

}