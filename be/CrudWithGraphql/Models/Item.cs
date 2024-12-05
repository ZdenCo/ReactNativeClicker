using System.ComponentModel.DataAnnotations;

namespace CrudBackendApp.Models
{
    public class Item
    {
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
