using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ImcController : ControllerBase
    {
        private readonly AppDataContext _context;
        public ImcController(AppDataContext context)
        {
            _context = context;
        }
        [HttpPost("{id}")]
        public ActionResult<Imc> PostImc(int id, Imc imc)
        {
            var aluno = _context.Alunos.Find(id);
            if (aluno == null)
            {
                return NotFound("Aluno não encontrado");
            }
            imc.AlunoID = id;
            imc.CalcularEAtualizarImc();
            AtualizarClassificacao(imc);
            imc.dataCriacao = DateTime.Now;
            _context.Imcs.Add(imc);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetImcs), new { id = imc.ImcID }, imc);
        }
        [HttpGet]
        public ActionResult<IEnumerable<Imc>> GetImcs()
        {
            var imcs = _context.Imcs.Include(i => i.Aluno).ToList();

            foreach (var imc in imcs)
            {
                imc.CalcularEAtualizarImc();
                AtualizarClassificacao(imc);
            }

            return imcs;
        }
        [HttpGet("{id}")]
        public ActionResult<Imc> GetImc(int id)
        {
            var imc = _context.Imcs.Find(id);
            if (imc == null)
            {
                return NotFound();
            }

            imc.CalcularEAtualizarImc();
            AtualizarClassificacao(imc);

            return imc;
        }
        [HttpPut("{id}")]
        public IActionResult PutImc(int id, Imc imc)
        {
            if (id != imc.ImcID)
            {
                return BadRequest();
            }

            _context.Imcs.Update(imc);
            imc.CalcularEAtualizarImc();
            AtualizarClassificacao(imc);

            _context.SaveChanges();

            return Ok();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteImc(int id)
        {
            var imc = _context.Imcs.Find(id);
            if (imc == null)
            {
                return NotFound();
            }

            _context.Imcs.Remove(imc);
            _context.SaveChanges();

            return NoContent();
        }
        private void AtualizarClassificacao(Imc imc)
        {
            double valorImc = imc.ValorImc;

            if (valorImc < 18.5)
                imc.Classificar = "Abaixo do peso";
            else if (valorImc < 24.9)
                imc.Classificar = "Peso normal";
            else if (valorImc < 29.9)
                imc.Classificar = "Sobrepeso";
            else if (valorImc < 39.9)
                imc.Classificar = "Obesidade";
            else
                imc.Classificar = "Obesidade Grave";
        }
    }
}
