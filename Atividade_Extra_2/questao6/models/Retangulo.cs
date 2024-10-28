namespace questao6.models
{
    public class Retangulo
    {
        public double L1;
        public double L2;

        public double CalcularArea()
        {
            return L1 * L2;
        }

        public double CalcularPerimetro()
        {
            return L1*2 + L2*2;
        }

        public bool EhQuadrado()
        {
            if (L1 == L2)
            {
                return true;
            }

            return false;
        }
    }
}