/*
# Questão 1: Cadastro e Análise de Notas com Array
Desenvolva um programa que solicite ao usuário a quantidade de alunos de
uma turma e armazene as notas deles em um array de double. O programa deve 
calcular e exibir a média da turma, a maior nota, a menor nota e a quantidade
de alunos aprovados, considerando média mínima igual a 6,0.
Utilize Scanner para a entrada, try/catch para tratar valores inválidos,
conversão de tipos quando necessário e um laço for para percorrer o array.
Use if/else para classificar os alunos como aprovados ou reprovados.
*/
import java.util.Scanner;
import java.util.InputMismatchException;

public class ARRAY1 {
    public static void main (String[] args){
        Scanner alunos = new Scanner(System.in);
        Scanner valorNotas = new Scanner(System.in);
        int nmrAlunos = 0;
        double[] notas = null;
        double somaNota = 0;
        int aprovados = 0;

        try{
        System.out.println("Digite a quantidade de alunos da turma: ");
        nmrAlunos = alunos.nextInt();
        
        notas = new double [nmrAlunos];
        }catch (InputMismatchException e){

            System.out.println("Valor digitado invalido!");
            System.out.println(e);
            
        }
        for (int i = 0; i < nmrAlunos; i++){
            do{ 
                try{

                    System.out.println("Digite a nota do aluno: ");
                    notas[i] = valorNotas.nextDouble();
        
                }catch (InputMismatchException e){
                    System.out.println("Digite um número valido");
                    valorNotas.nextLine();
                }

            
            }while( notas[i] > 10 || notas [i] < 0);
        }

            double menorNota= notas[0];
            double maiorNota = notas[0];
            
                for (int i = 0; i < nmrAlunos; i++){
                    somaNota = somaNota + notas[i];
                    
                    if (notas[i] > maiorNota) {
                        maiorNota = notas[i];
                    }
                    
                    if (notas[i] < menorNota) {
                        menorNota = notas[i];
                    }
                    
                    if (notas[i] >= 6.0) {
                        aprovados++;
                    }
            }

            System.out.println("A média das notas é igual a:" + somaNota / nmrAlunos);
            System.out.println("A média das notas é igual a:" + maiorNota);
            System.out.println("A média das notas é igual a:" + menorNota);
            System.out.println("A média das notas é igual a:" + aprovados);
            alunos.close();
            valorNotas.close();
        }
 }    


