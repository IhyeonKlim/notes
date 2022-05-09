import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int result = 0;
        if (a >= 1 && a <= 4000) {
            if ((a % 4 == 0) && (!(a % 100 == 0) || (a % 400 == 0))) {
                result = 1;
            }
        }
        // System.out.println(a % (a % 25 > 0 ? 4 : 16) < 1 ? 1 : 0);
        sc.close();
        System.out.println(result);
    }
}
