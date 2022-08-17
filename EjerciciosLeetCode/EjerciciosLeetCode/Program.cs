using System;

namespace EjerciciosLeetCode
{
    class Program
    {
        static void Main(string[] args)
        {
            Program p = new Program();
            int[] a = { 3, 2, 4 };
            Console.WriteLine(p.TwoSum(a, 6).ToString());
        }

        public int[] TwoSum(int[] nums, int target)
        {
            int resultadoSuma;
            int i = 0;
            int[] posiciones = new int[2];
            while (i < nums.Length)
            {
                for (int j = i; j < nums.Length; j++)
                {
                    resultadoSuma = nums[i] + nums[j];

                    if (resultadoSuma == target)
                    {
                        posiciones[0] = i;
                        posiciones[1] = j;
                        return posiciones;
                    }
                }
            }
            return null;
        }
    }
}
