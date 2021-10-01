import Modal from 'react-modal'
import { Container } from './styles'

type newTransactionModalProps = {
    isOpen: boolean,
    onRequestClose: () => void,
}

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps){
    return(
        <Modal isOpen={isOpen}
             onRequestClose={onRequestClose}
             overlayClassName="react-modal-overlay"
             className="react-modal-content">
                <Container>
                    <h2>Cadastrar Transação</h2>
                    
                    <input placeholder="titulo" />
                    <input placeholder="valor" type="number" />

                    <button type="submit">
                        Cadastrar
                    </button>
                </Container>
        </Modal>

    )
}