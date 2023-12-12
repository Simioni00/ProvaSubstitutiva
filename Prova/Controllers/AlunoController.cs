using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlunoController : ControllerBase
    {
        private readonly AppDataContext _context;
        public AlunoController(AppDataContext context)
        {
            _context = context;
        }
        [HttpPost]
        public ActionResult<Aluno> PostAluno(Aluno aluno)
        {
            if (string.IsNullOrEmpty(aluno.Nome))
            {
                return BadRequest("O nome é obrigatório.");
            }
            _context.Alunos.Add(aluno);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetAluno), new { id = aluno.AlunoID }, aluno);
        }
        [HttpGet("{id}")]
        public ActionResult<Aluno> GetAluno(int id)
        {
            var aluno = _context.Alunos.Find(id);

            if (aluno == null)
            {
                return NotFound();
            }
            return aluno;
        }
        [HttpPut("{id}")]
        public IActionResult PutAluno(int id, Aluno aluno)
        {
            if (id != aluno.AlunoID)
            {
                return BadRequest();
            }
            _context.Entry(aluno).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteAluno(int id)
        {
            var aluno = _context.Alunos.Find(id);
            if (aluno == null)
            {
                return NotFound();
            }
            _context.Alunos.Remove(aluno);
            _context.SaveChanges();
            return NoContent();
        }
        [HttpGet]
        public ActionResult<IEnumerable<Aluno>> GetAlunos()
        {
            return _context.Alunos.ToList();
        }
    }
}