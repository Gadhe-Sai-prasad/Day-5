public class pattern2 {
    public static void main(String[] args) {
        int n = 3;

        for (int i = n; i >0; i--) {

            int st = i;
            int sp = n - st;
            for (int j = 1; j <=sp; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <=st; j++) {
                System.out.print("* ");

            }
            System.out.println("");
        }

    }
}