-- Retrieve items for a specific business
SELECT Business.business_name, Item.item_name
FROM Business
JOIN Item ON Business.business_id = Item.business_id
WHERE Business.business_id = 1; -- Specify the business_id you're interested in
