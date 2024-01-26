import axios from "axios";

const ATA_API_BASE_URL = 'http://localhost:8080/api/atas';

class AtaService{
    getAtas(){
        return axios.get(ATA_API_BASE_URL + "/todos");
    }
}

export default new AtaService();