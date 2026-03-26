// @ts-check
import { test, expect } from '@playwright/test';
const API_URL = process.env.API_URL || 'https://73nhe22wt4.execute-api.ap-southeast-4.amazonaws.com/default/incrementVisitorCount';

test('API returns visitor count', async ({ request }) => {
  const response = await request.get(API_URL);
  expect(response.status()).toBe(200);
  const data = await response.json();

  expect(data).toHaveProperty('visitor_count');
  expect(typeof data.visitor_count).toBe('number');
});

test('Visitor count increments', async ({ request }) => {
  const response1 = await request.get(API_URL);
  const first = (await response1.json()).visitor_count;

  const response2 = await request.get(API_URL);
  const second = (await response2.json()).visitor_count;

  expect(second).toBe(first + 1);
});

test('API response structure is correct', async ({ request }) => {
  const response = await request.get(API_URL);
  expect(response.status()).toBe(200);
  const data = await response.json();

  expect(data).toEqual(
    expect.objectContaining({
      visitor_count: expect.any(Number),
    })
  );
});
