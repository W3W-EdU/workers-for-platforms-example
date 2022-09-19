// Copyright (c) 2022 Cloudflare, Inc.
// Licensed under the APACHE LICENSE, VERSION 2.0 license found in the LICENSE file or at http://www.apache.org/licenses/LICENSE-2.0

import { D1QB } from 'workers-qb';
import { Obj } from 'itty-router';

export type ResourceValues = string | number | boolean | null;
export type ResourceRecord = Record<string, ResourceValues>;

export interface IRequest extends Request {
  params: Obj,
  db: D1QB,
  customer: Customer
}

export interface Customer {
  id: string,
  name: string,
  plan_type: string
}

export interface CustomerToken {
  customer_id: string,
  token: string
}

export interface ApiScript extends ResourceRecord {
  id: string,
  modified_on: string,
  created_on: string,
  script_tags: string  // Just for rendering. Keep the state of script tags in dispatch namespace API
}
