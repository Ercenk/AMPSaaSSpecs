// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace AzureMarketplace.SaaS.Models
{
    using Newtonsoft.Json;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    public partial class PlansResponse
    {
        /// <summary>
        /// Initializes a new instance of the PlansResponse class.
        /// </summary>
        public PlansResponse()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the PlansResponse class.
        /// </summary>
        public PlansResponse(IList<Plan> subscriptions = default(IList<Plan>))
        {
            Subscriptions = subscriptions;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "subscriptions")]
        public IList<Plan> Subscriptions { get; set; }

    }
}
