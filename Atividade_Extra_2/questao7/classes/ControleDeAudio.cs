namespace questao7.classes


{
    public class ControleDeAudio
    {
        public int Volume = 2;
        
        public int AumentarVolume()
        {
            if (Volume < 10)
            {
                return Volume++;
            }

            return Volume;
        }

        public int DiminuirVolume()
        {
            if (Volume > 0)
            {
                return Volume--;
            }

            return Volume;
        }

        public void LerVolume()
        {
            Console.WriteLine($"\nVolume atual: {Volume}");
        }
    }
}