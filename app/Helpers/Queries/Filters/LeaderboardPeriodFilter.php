<?php

namespace App\Helpers\Queries\Filters;

use Illuminate\Database\Eloquent\Builder;

class LeaderboardPeriodFilter extends PeriodFilter
{
    public function buildQuery(Builder $query): Builder
    {
        return $query->period($this->getValue(), 'games');
    }
}
