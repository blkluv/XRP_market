# Generated by Django 4.2.4 on 2023-08-18 07:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Collection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='name')),
                ('taxon', models.IntegerField(verbose_name='taxon')),
                ('description', models.TextField(blank=True, null=True, verbose_name='description')),
                ('floor_price', models.DecimalField(decimal_places=6, max_digits=24, verbose_name='floor price')),
                ('daily_volume', models.DecimalField(decimal_places=6, max_digits=24, verbose_name='daily volume')),
                ('weekly_volume', models.DecimalField(decimal_places=6, max_digits=24, verbose_name='weekly volume')),
                (
                    'monthly_volume',
                    models.DecimalField(decimal_places=6, max_digits=24, verbose_name='monthly volume'),
                ),
                ('total_volume', models.DecimalField(decimal_places=6, max_digits=24, verbose_name='total volume')),
                ('image_url', models.URLField(blank=True, null=True, verbose_name='image url')),
                ('banner_url', models.URLField(blank=True, null=True, verbose_name='banner url')),
                ('discord_link', models.URLField(blank=True, null=True, verbose_name='discord link')),
                ('instagram_link', models.URLField(blank=True, null=True, verbose_name='instagram link')),
                ('twitter_link', models.URLField(blank=True, null=True, verbose_name='twitter link')),
                ('issuer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.account')),
            ],
        ),
        migrations.CreateModel(
            name='NFT',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='name')),
                ('token_identifier', models.CharField(max_length=255, unique=True, verbose_name='token identifier')),
                ('sequence', models.IntegerField(verbose_name='sequence')),
                ('price', models.DecimalField(decimal_places=6, max_digits=24, verbose_name='price')),
                ('uri', models.CharField(blank=True, max_length=255, null=True, verbose_name='uri')),
                ('flags', models.IntegerField(verbose_name='flags')),
                ('image_url', models.URLField(blank=True, null=True, verbose_name='image url')),
                (
                    'status',
                    models.CharField(
                        choices=[('listed', 'Listed'), ('auction', 'Auction'), ('unlisted', 'Unlisted')],
                        max_length=8,
                        verbose_name='status',
                    ),
                ),
                (
                    'collection',
                    models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collection.collection'),
                ),
                (
                    'owner',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, related_name='my_nfts', to='accounts.account'
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name='NFTAttribute',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key', models.CharField(db_index=True, max_length=255, verbose_name='key')),
                ('value', models.CharField(max_length=255, verbose_name='value')),
                (
                    'collection',
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name='collection_attributes',
                        to='collection.collection',
                    ),
                ),
                (
                    'nft',
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, related_name='nft_attributes', to='collection.nft'
                    ),
                ),
            ],
        ),
        migrations.AddConstraint(
            model_name='collection',
            constraint=models.UniqueConstraint(fields=('issuer', 'taxon'), name='unique_collection'),
        ),
    ]
