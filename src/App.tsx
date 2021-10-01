import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

import Modal from 'react-modal'
import { useState } from "react";


Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <>
    {/* PASSANDO A FUNÇÃO HANDLE POR PROPRIEDADE PARA O HEADER */}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}/>

      <GlobalStyle />
    </>
  );
}


