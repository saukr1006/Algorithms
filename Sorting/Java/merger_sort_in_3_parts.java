import java.util.Arrays;
import java.util.Scanner;
import java.util.*;

public class Main {
    void mergesort(int a[], int l, int h) {
        if (l + 1 < h) {

            int half = (l + h) / 2;
            int fhalf = (l + half) / 2;
            int shalf = (half + h) / 2;
            int f = (fhalf + half) / 2;
            int s = (half + shalf) / 2;
            mergesort(a, l, f);
            mergesort(a, f + 1, s);
            mergesort(a, s + 1, h);
            merge(a, l, f + 1, s + 1, h);
        } else if (l + 1 == h) {
            int m = Math.max(a[l], a[h]);
            int k = Math.min(a[l], a[h]);
            a[l] = k;
            a[h] = m;
        }
    }

    void merge(int a[], int lp, int mp, int rp, int re) {
        int le = mp - 1;
        int me = rp - 1;
        int tp = 0;
        int ne = re - lp + 1;
        int temp[] = new int[ne];
        while (lp <= le && rp <= re && mp <= me) {
            if (a[lp] <= a[rp]) {
                if (a[lp] <= a[mp]) {
                    temp[tp] = a[lp];
                    lp++;
                } else {
                    temp[tp] = a[mp];
                    mp++;
                }
                tp++;
            }
            if (a[lp] > a[rp]) {
                if (a[rp] <= a[mp]) {
                    temp[tp] = a[rp];
                    rp++;

                } else {
                    temp[tp] = a[mp];
                    mp++;
                }
                tp++;
            }
        }
        if (lp == le + 1) {
            while (mp <= me && rp <= re) {
                if (a[mp] <= a[rp]) {
                    temp[tp] = a[mp];
                    mp++;
                    tp++;
                }
                if (a[mp] > a[rp]) {
                    temp[tp] = a[rp];
                    rp++;
                    tp++;
                }
            }
        } else if (mp == me + 1) {
            while (lp <= le && rp <= re) {
                if (a[lp] <= a[rp]) {
                    temp[tp] = a[lp];
                    lp++;
                    tp++;
                }
                if (a[lp] > a[rp]) {
                    temp[tp] = a[rp];
                    rp++;
                    tp++;
                }
            }
        } else if (rp == re + 1) {
            while (lp <= le && mp <= me)

            {
                if (a[lp] <= a[mp]) {
                    temp[tp] = a[lp];
                    lp++;
                    tp++;
                }
                if (a[lp] > a[mp]) {
                    temp[tp] = a[mp];
                    mp++;
                    tp++;
                }
            }
        }
        while (lp <= le) {
            temp[tp] = a[lp];
            lp++;
            tp++;
        }
        while (rp <= re) {
            temp[tp] = a[rp];
            tp++;
            rp++;
        }
        while (mp <= me) {
            temp[tp] = a[mp];
            tp++;
            mp++;
        }
        for (int i = ne - 1; i >= 0; --i, re--)
            a[re] = temp[i];
    }

    static void printArray(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String args[]) {
        int arr[] = { 12, 11, 13, 5, 6, 7 };

        System.out.println("Given Array");
        printArray(arr);
        Main ob = new Main();
        ob.mergesort(arr, 0, arr.length - 1);
        System.out.println("\nSorted array");
        printArray(arr);
    }
}
