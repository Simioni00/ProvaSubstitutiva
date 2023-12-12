using System;

namespace API.Models
{
    public class Imc
    {
        public int ImcID { get; set; }
        public double Altura { get; set; }
        public double Peso { get; set; }
        public int AlunoID { get; set; }
        public Aluno? Aluno { get; set; }
        public double ValorImc { get; set; }  
        public string? Classificar { get; set; } 
        public DateTime dataCriacao { get; set; }
        public void CalcularEAtualizarImc()
        {
            ValorImc = CalcularImc();
        }
        private double CalcularImc()
        {
            return Peso / (Altura * Altura);
        }
    }
}
