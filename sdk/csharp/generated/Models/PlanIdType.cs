// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace AzureMarketplace.SaaS.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    public partial class PlanIdType
    {
        /// <summary>
        /// Initializes a new instance of the PlanIdType class.
        /// </summary>
        public PlanIdType()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the PlanIdType class.
        /// </summary>
        public PlanIdType(string planId = default(string))
        {
            PlanId = planId;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "planId")]
        public string PlanId { get; set; }

    }
}