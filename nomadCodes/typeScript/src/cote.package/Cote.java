package cote;

import java.util.Scanner;

public class Cote{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
            int a = sc.nextInt();
            int b = sc.nextInt();

            String result = compare(a,b);
            System.out.println(result);
        }
        public static String compare(int a, int b){
            String result = "";
            if(a > b){
                result = ">";
            }else if(a < b){
                result = "<";
            }else if(a == b){
                result = "==";
            }
            return result;
        }
}