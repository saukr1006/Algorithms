import java.util.*;

class CountingSort
{
    public static void main(String [] args)
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++)
            arr[i] = sc.nextInt();
        sort(arr);
        for(int i=0;i<n;i++)
            System.out.print(arr[i] + " ");
        System.out.print("\n");
    }
    public static void sort(int[] arr)
    {
        int min = arr[0], max = arr[0];
        int n = arr.length;
        for(int i=1;i<n;i++)
        {
            if(min > arr[i])
                min = arr[i];
            if(max < arr[i])
                max = arr[i];
        }
        int[] tempArr = new int[max-min+1];
        for(int i=0;i<max-min+1;i++)
            tempArr[i] = 0;
        for(int i=0;i<n;i++)
            tempArr[arr[i]-min]++;
        int c = 0;
        for(int i=0;i<=max-min;i++)
            for(int j=0;j<tempArr[i];j++)
            {
                arr[c] = i+min;
                c++;
            }
    }
}
