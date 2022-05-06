import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        String result = "";
        if (a <= 100 && a >= 90) {
            result = "A";
        } else if (a <= 89 && a >= 80) {
            result = "B";
        } else if (a <= 79 && a >= 70) {
            result = "C";
        } else if (a <= 69 && a >= 60) {
            result = "D";
        } else {
            result = "F";
        }
        System.out.println(result);
        sc.close();
    }
}
