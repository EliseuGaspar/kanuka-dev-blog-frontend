import axios, {Axios, AxiosResponse, HttpStatusCode} from 'axios';


class DevBlogAPI {

    public url: string = 'http://localhost:8000'


    public getPosts() {
        //
    }

    public async auto_login(): boolean {
        // Realiza um auto-login usando o token.
        // Enviando o token para uma routa de validação de token!

        let api = await axios.post(`${this.url}/`)
    }


}

export default DevBlogAPI;

