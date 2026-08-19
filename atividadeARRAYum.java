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

public class atividadeARRAYum {
    public static void main (String[] args){
        Scanner alunos = new Scanner(System.in);
        double[] notas = new double [nmrAlunos];

        try{
        System.out.println("Digite a quantidade de alunos da turma: ");
        int nmrAlunos = alunos.nextInt();
        alunos.close();
        
        }catch (InputMismatchException e){

            System.out.println("Valor digitado invalido!");
            System.out.println(e);
        
        }
    }
    


    
}
