package cote.baekjoon;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int hours = 0;
        int minutes = 0;
        sc.close();
        if (b >= 45) {
            hours = a;
            minutes = b - 45;
        } else {
            minutes = 60 + b - 45;
            if (a == 0) {
                hours = 24 - 1;
            } else {
                hours = a - 1;
            }
        }
        String result = hours + " " + minutes;
        System.out.println(result);
    }
}