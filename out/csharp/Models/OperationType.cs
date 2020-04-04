// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace AzureMarketplace.SaaS.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    public partial class OperationType
    {
        /// <summary>
        /// Initializes a new instance of the OperationType class.
        /// </summary>
        public OperationType()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the OperationType class.
        /// </summary>
        public OperationType(System.Guid? id = default(System.Guid?), System.Guid? activityId = default(System.Guid?), System.Guid? subscriptionId = default(System.Guid?), string offerId = default(string), string publisherId = default(string), string planId = default(string), int? quantity = default(int?), string action = default(string), string timeStamp = default(string), string status = default(string))
        {
            Id = id;
            ActivityId = activityId;
            SubscriptionId = subscriptionId;
            OfferId = offerId;
            PublisherId = publisherId;
            PlanId = planId;
            Quantity = quantity;
            Action = action;
            TimeStamp = timeStamp;
            Status = status;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "id")]
        public System.Guid? Id { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "activityId")]
        public System.Guid? ActivityId { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "subscriptionId")]
        public System.Guid? SubscriptionId { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "offerId")]
        public string OfferId { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "publisherId")]
        public string PublisherId { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "planId")]
        public string PlanId { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "quantity")]
        public int? Quantity { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "action")]
        public string Action { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "timeStamp")]
        public string TimeStamp { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "status")]
        public string Status { get; set; }

    }
}
