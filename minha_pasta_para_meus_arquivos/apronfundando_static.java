class Metodo{
  String nome_MT;
  static String nome_func = "testar coisas";

  public Metodo(String nome_MT){
    this.nome_MT = nome_MT;
  }
  void Teste_de_metodo(){
    System.out.println(nome_MT);
  }
}
public class Main{
  public static void main(String[] args){
    Metedo mt = new Metodo("tester de metodos");
    mt.Teste_de_metodo();
  }
}
