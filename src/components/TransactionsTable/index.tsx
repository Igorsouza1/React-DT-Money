import { Container } from "./styles";


export function TransactionTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Catergoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolviemento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw" > -R$1.000</td>
                        <td>Casa</td>
                        <td>20/02/2021</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>

    )
}