import java.util.Scanner;
public class Main{
	static Scanner input = new Scanner(System.in); 
	public static void main(String[] args){
	    String cumprimento = imprimirNome(input.nextLine());
	    System.out.println(cumprimento + "\n");
		double x = soma();
		System.out.println(x + "\n");
		double y = multiplicacao();
		System.out.println(y + "\n");
		boolean idadeV = verificacao(input.nextInt());
		System.out.println(idadeV);
	}
	static double a;
	static double b;
    public static double soma(){
       a = input.nextDouble();
       input.nextLine();
       b = input.nextDouble();
       input.nextLine();
       return a + b;
    }
    public static double multiplicacao(){
       a = input.nextDouble();
       input.nextLine();
       b = input.nextDouble();
       input.nextLine();
       return a * b;
    }
    public static String imprimirNome(String nome){
        return "olá " + nome;
    }
    public static boolean verificacao(int idade){
        if(idade >= 18){
            return true;
        }
        return false;
    }
}
