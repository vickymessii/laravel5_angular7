<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gst extends Model
{
    protected $fillable = [
        'person_name', 'business_name', 'business_gst_number',
    ];
}
