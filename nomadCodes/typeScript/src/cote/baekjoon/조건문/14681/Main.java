import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int result = 1;
        if (a > 0) {
            if (b > 0) {
                result = 1;
            } else {
                result = 4;
            }
        } else {
            if (b > 0) {
                result = 2;
            } else {
                result = 3;
            }
        }
        sc.close();
        System.out.println(result);
    }
}