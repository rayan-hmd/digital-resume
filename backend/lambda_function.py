import boto3
import json
from decimal import Decimal

# Initialize the DynamoDB resource
# Boto3 automatically uses configured credentials and region
dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-4') # Replace with your region

# Reference your specific table
table = dynamodb.Table('visitorCount')

def lambda_handler(event, context):
    method = event.get('httpMethod', 'POST')  # Default to POST if missing

    if method == 'POST':
        # Increment visitor count
        response = table.update_item(
            Key={'id': '1'},
            UpdateExpression='ADD visitorCount :val',
            ExpressionAttributeValues={':val': 1},
            ReturnValues='UPDATED_NEW'
        )
        visitor_count = int(response['Attributes']['visitorCount'])

    elif method == 'GET':
        # Read current visitor count
        response = table.get_item(Key={'id': '1'})
        visitor_count = int(response['Item']['visitorCount'])

    else:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Unsupported method'})
        }

    return {
        'statusCode': 200,
        'body': json.dumps({'visitor_count': visitor_count})
    }
