import { HomeContainer, Images,  Select} from "./styled";
import city from "../../images/city.jpg"
import hospitality from "../../images/hospitality.jpg";
import pass from "../../images/pass.jpeg"


export default function Home() {

    return (
        <HomeContainer>
            <Select>
                <select>
                    <option disabled selected>Qual cidade destino?</option>
                    <option value="Brasília">Brasília</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Belo Horizonte">Belo Horizonte</option>
                    <option value="Salvador">Salvador</option>
                    <option value="Curitiba">Curitiba</option>
                    <option value="Fortaleza">Fortaleza</option>

                </select>

            </Select>

            <Images>
                <img src={city} alt="image1" />
                <img src={pass} alt="image1" />
                <img src={hospitality} alt="image1" />
            </Images>
        </HomeContainer>
    )
}
