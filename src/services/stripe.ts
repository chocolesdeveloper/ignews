import Stripe from 'stripe';
import { version } from '../../package.json';

export const stripe = new Stripe (
    //Primeiro parâmentro é por de onde a chave está vindo
    //No caso aqui foi criada um arquivo .env.local
    // que está puxando a variavel
    process.env.STRIPE_API_KEY, 
    //Segundo parâmentro    
    {
        //Primeira propriedade é a versao do Stripe
        apiVersion: '2020-08-27',
        //Informações de metadados
        appInfo: {
            //Pro stripe saber qual aplicação ta fazendo requesição
            name:'Ignews',
            //versão da nossa aplicação, sendo puxada diretamente do JSON
            version,
        },

    }
);