import boto3
import json
from decimal import Decimal

# Initialize the DynamoDB resource
# Boto3 automatically uses configured credentials and region
dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-4') # Replace with your region

# Reference your specific table
table = dynamodb.Table('visitorCount') # Replace 'YourTableName'

def lambda_handler(event, context):
    # Increment visitor count
    response = table.update_item(
        Key={
            'id': '1'
        },
        UpdateExpression='ADD visitorCount :val',
        ExpressionAttributeValues={
            ':val': 1
        },
        ReturnValues='UPDATED_NEW'
    )

    # Convert Decimal to int
    visitor_count = int(response['Attributes']['visitorCount'])
    
    # Return the new count
    return {
        'statusCode': 200,
        'body': json.dumps({
            'visitor_count': visitor_count
        })
    }
