import Login from '../Classes/Classe_OlimpiaLogin'

const login = new Login

describe('visitHomePage', () => {
    it('Acessando pagina principal', () => {
        cy.visit('/');
    })
})

describe('login', () => {
    it('Preenchendo campos "usuario" e "senha"', () => {
        cy.get(login.preencherUsuario()).type(Cypress.config('loginAdmin'))
        cy.get(login.preencherSenha()).type(Cypress.config('passAdmin'))
        cy.get(login.clicoEmAcessar()).click()
        cy.get(login.botaoSolicitar()).click()
    })
})

describe('Escolhendo tipo de requerimento', () => {
    it('Preenchendo campos', () => {
        cy.get(login.preenchendonovoreq()).type('alvará de licença{enter}')
        cy.wait(3000)
        cy.get(login.finalidade()).type('comercial{enter}')
        cy.wait(1000)
        cy.get(login.ocupacao()).type('assobradada{enter}')
        cy.get(login.botaoavancar()).click()
    })
})

describe('Preenchendo a Grid Dados do local ou Imóvel', () => {
    it('Preenchendo campos', () => {
        cy.get(login.dadosdolocal()).click()
        cy.get(login.campoInscricaoImobiliaria()).type(Math.floor(Math.random() * 10))
        cy.get(login.checkNaoInscricao()).check()
        cy.get(login.containerTipoDeLogradouro()).type('avenida{enter}')
        cy.get(login.logradouro()).type('Testando')
        cy.get(login.numero()).type('900')
        cy.get(login.bairro()).type('Teste')
    })
})

describe('Preenchendo a Grid Dados do Proprietario', () => {
    it('Preenchendo campos', () => {
        cy.get(login.dadosProprietario()).click()
        cy.get(login.crc()).type('5088495')
        cy.get(login.campoNome()).type('Automator', { force: true })
        cy.get(login.campoSobreNome()).type('Test')
        cy.get(login.containerTipo()).type('Posseiro{enter}')
        cy.get(login.campoCpf()).type('48849569823')
        cy.get(login.campoEmail()).type('automator@hotmail.com')
        cy.get(login.campoCelular()).type('11111111111')
    })
})

describe('Preenchendo a Grid Dados do Responsável Técnico', () => {
    it('Preenchendo campos', () => {
        cy.get(login.dadosResponsavelTecnico()).click()
        cy.get(login.souResponsavelTecnico()).click()
        cy.get(login.responsabilidade()).type('Projeto de Arquitetura{enter}')
        cy.get(login.campoArt()).type('55508')
        cy.get(login.estado()).type('são paulo{enter}')
    })
})

describe('Preenchendo a Grid Sisobras', () => {
    it('Preenchendo campos', () => {
        cy.get(login.sisobras()).click()
        cy.get(login.responsavelPelaExecucaoDaObra()).select('1')
        cy.get(login.campoCategoria()).type('Obra Nova{enter}')
        cy.get(login.destinacao()).type('Conjunto habitacional{enter}')
        cy.get(login.tipoDeObra()).type("alvenaria{enter}")
        cy.get(login.campoArea()).type('9999999')
        cy.get(login.campoUnidadesBloco()).type('5')
    })
})

describe('checkbox termo', () => {
    it('Check Box', () => {
        cy.get(login.termoDeCompromisso()).click()
        cy.get(login.checkBoxTermo()).check()
        cy.get(login.botaoavancar()).click()
    })
})

