<?php

namespace App\Models;
use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;
// A custom PersonalAccessToken to add some fields
class PersonalAccessToken extends SanctumPersonalAccessToken
{
    
}