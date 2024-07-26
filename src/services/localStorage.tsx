

export default class LocalStorage {

    public exists_Token(): boolean {
        // Verifica a existência do token no navegador do usuário
        let token = localStorage.getItem('[DevBlog].token');
        if (token === null || token === '')
            return false;
        return true;
    }

    public set_tokenValue(token: string): boolean {
        // Cria ou atualiza o valor do token no storage
        localStorage.setItem('[DevBlog].token', token);
        return this.get_token() === token;
    }

    public get_token(): string {
        // Pega o token do storage
        let token = localStorage.getItem('[DevBlog].token')
        if(typeof(token) === 'string')
            return token;
        return '';
    }

    public rememberMe(): boolean {
        // Checa se apção relembrar conta está activa ou não
        let _rememberMe = localStorage.getItem('[DevBlog].remember');
        if (_rememberMe === null || _rememberMe === 'false')
            return false;
        return true;
    }

    public set_rememberValue(state: boolean): boolean {
        // Seta o estado da opção relembrar-me
        localStorage.setItem('[DevBlog].remember', `${state}`)
        if (typeof(localStorage.getItem('[DevBlog].remember')) === null)
            return false;
        return true;
    }
}