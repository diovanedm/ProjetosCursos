
package Model;

public class Cls_Calculo {
    
    public String calcular(String tipo, int numero){
        //1 - Inicializar as variáveis
        String resultado = "";
        //2 - Criar a sequencia 
        switch (tipo){
            case "2":{
                for(int ct = numero; ct <= 30; ct = ct + 2){
                    resultado = resultado + String.valueOf(ct) + "/";
                }
                break;
            }
            case "3":{
                for(int ct = numero; ct <= 30; ct = ct + 3){
                    resultado = resultado + String.valueOf(ct) + "/";
                }
                break;
            }
     
    }
           return resultado;     
}
   
}