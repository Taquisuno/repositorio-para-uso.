import java.util.Scanner;
public class main{
	static Scanner input = new Scanner(System.in); 
	public static void main(String[] args){
		soma();
	}
    public static int soma(int a, int b){
        a = input.nextInt()
		input.nextLine();
		b = input.nextInt();
		input.nextLine();
		return a + b;
    }
}
