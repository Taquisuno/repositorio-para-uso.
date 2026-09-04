import java.util.Scanner;
public class Main{
	static Scanner input = new Scanner(System.in); 
	public static void main(String[] args){
		int x = input.nextInt();
		int y = input.nextInt();
		int z = soma(x, y);
		System.out.println(z);
	    double a = input.nextDouble();
		double b = input.nextDouble();
		double c = soma(a, b);
		System.out.println(c);
		int d = input.nextInt();
		int e = input.nextInt();
		int f = input.nextInt();
		int n = soma(d, e, f);
		System.out.println(n);
	}
	public static int soma(int x, int y){
       return x + y;
    }
    public static double soma(double x, double y){
       return x + y;
    }
	public static int soma(int x, int y, int c){
       return x + y + c;
    }
}
